import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { session } = useContext(UserContext);
  const [showProDialog, setShowProDialog] = useState(false);

  return (
    <>
      <nav className="flex justify-between align-center max-w-screen-2xl mx-auto px-3 md:px-8 text-gray1 w-full">
        <Link
          className="flex justify-center items-center text-center invisible md:visible"
          to="/"
        >
          <img
            id="logo"
            className="hover:scale-125 transition hover:drop-shadow-[0_0_9px_rgba(34,197,94,0.9)] w-0 md:w-64 mt-4"
            src="https://supaship.io/supaship_logo_with_text.svg"
            alt="logo"
          />
        </Link>

        <ul className="flex justify-center items-center">
          <li
            slot="basic"
            className="mx-2 lg:mx-4 hover:scale-105 transition-transform invisible lg:visible w-9=0 lg:w-fit h-0 lg:h-fit"
          >

            <a
              className="font-display text-base font-normal text-green-500 border-green-400 border rounded-md px-2 py-1 hover:drop-shadow-[0_0_9px_rgba(34,197,94,0.9)] flex place-items-center"
              href="https://fireship.io/courses/supabase"
            >
              <img
                className="h-10 mr-2"
                src="https://supaship.io/supaship_logo.svg"
              />
              <div className="grid place-items-center font-sans">
                <span className="inline-block">
                  get the course to build this site on fireship
                </span>
                <span className="inline-block">
                  use coupon: "SUPASHIP" for 50% off!
                </span>
              </div>
              <img
                className="h-10 mr-2"
                src="https://supaship.io/supaship_logo.svg"
              />

            </a>
          </li>

          <li className="mx-2 md:mx-4 hover:scale-105 transition-transform">
            <Link
              to="message-board/1"
              className="font-sans text-xl font-bold leading-none text-gray2 gradient-slide"
            >
              message board
            </Link>
          </li>
        </ul>
      </nav>
      <Dialog
        open={showProDialog}
        dialogStateChange={(open) => {
          setShowProDialog(open);
        }}
        contents={
          <>
            <div className="flex flex-col content-center gap-6">
              <h2 className="text-green-400 drop-shadow-[0_0_9px_rgba(34,197,94,0.9)] m-4 text-center text-3xl">
                We're not quite ready yet
              </h2>
              <p className="text-center">
                Expect the course to drop sometime.
                <a
                  href="https://fireship.io/courses"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-400 hover:drop-shadow-[0_0_9px_rgba]"
              </p>
            </div>
        }
          </>
  );
}

