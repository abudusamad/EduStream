import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div>
            <div className="text-xl font-bold">E-Learn</div>
            <p className="mt-2">
              Top learning experiences that create more talent in the world
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#">
                <img src="/playstore.png" alt="Play Store" className="h-8" />
              </a>
              <a href="#">
                <img src="/appstore.png" alt="App Store" className="h-8" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Categories</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-300">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300">
                  Media
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-300">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300">
                  News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Social</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300">
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Legal</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-300">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
