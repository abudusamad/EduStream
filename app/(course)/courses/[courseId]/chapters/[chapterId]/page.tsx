import { getChapter } from "@/actions/get-chapter";
import { Banner } from "@/components/banner";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CourseEnrollButton } from "./_components/course-enroll-button";
import { VideoPlayer } from "./_components/video-player";
import { CourseProgressButton } from "./course-progress-button";

const ChapterIdPage = async ({
	params,
}: {
	params: {
		courseId: string;
		chapterId: string;
	};
}) => {
	const { userId } = auth();

	if (!userId) {
		return redirect("/");
	}

	const {
		chapter,
		course,
		muxData,
		attachments,
		nextChapter,
		userProgress,
		purchase,
	} = await getChapter({
		userId,
		courseId: params.courseId,
		chapterId: params.chapterId,
	});

	if (!course || !chapter) {
		return redirect("/");
	}

	const isLocked = !chapter.isFree && !purchase;
	const completeOnEnd = !!purchase && !userProgress?.isCompleted;

	return (
		<div>
			{userProgress?.isCompleted && (
				<Banner
					variant="success"
					label="You have already completed this chapter"
				/>
			)}
			{isLocked && (
				<Banner
					variant="warning"
					label="You need to purchase this course to access this chapter"
				/>
			)}
			<div className="flex flex-col max-w-4xl mx-auto pb-20">
				<div className="p-4">
					<VideoPlayer
						title={chapter.title}
						chapterId={params.chapterId}
						courseId={params.courseId}
						nextChapterId={nextChapter?.id}
						playbackId={muxData?.playbackId!}
						isLocked={isLocked}
						completeOnEnd={completeOnEnd}
					/>
				</div>
				<div>
					<div className="p-4 flex flex-col md:flex-row items-center justify-between">
						<h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
						{purchase ? (
							<CourseProgressButton
								courseId={params.courseId}
								chapterId={params.chapterId}
								isCompleted={!!userProgress?.isCompleted}
								nextChapterId={nextChapter?.id}
							/>
						) : (
							<CourseEnrollButton
								courseId={params.courseId}
								price={course.price!}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChapterIdPage;
