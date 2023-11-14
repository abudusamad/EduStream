"user client";

import { useConfettiStore } from "@/hooks/use-confetti-store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface VideoPlayerProps {
    playbackId: string;
    courseId: string;
    chapterId: string;
    nextChapterId?: string;
    isLocked: boolean;
    completeOnEnd: boolean;
    title: string;

}


export const VideoPlayer = ({
    playbackId,
    courseId,
    chapterId,
    nextChapterId,
    isLocked,
    completeOnEnd,
    title,
}: VideoPlayerProps) => {
    
    const [isReady, setIsReady] = useState(false);
    const router = useRouter();
    const confetti = useConfettiStore();

    const onEnd = async () => {
        try {
            if (completeOnEnd) {
                await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`)
            }
            
        } catch {
            toast.error("Something went wrong")
        }
    }

  return <div></div>;
}