import { useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { SiAddthis } from "react-icons/si";
import { FaCheck } from "react-icons/fa6";

function Page() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [iscreateNoteOpen, setcreateNoteOpen] = useState(false);
  const [title, setTitle] = useState(false);
  const [para, setPara] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!isModalOpen);
  };

  const handleNoteOpening = () => {
    setcreateNoteOpen(!iscreateNoteOpen);
  };

  const link = "http://localhost:3000/";
  const postlink = "http://localhost:3000/new";

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create a new FormData object
      const postData = {
        title,
        para,
      };

      console.log(postData);

      fetch(postlink, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
      // Handle any further logic after successful submission
      handleNoteOpening();
    } catch (err) {
      console.error("Error submitting data: ", err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(link);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mainPage font-serif">
        <div className="w-[100%] flex justify-center bg-blue-900 text-center font-serif p-2">
          <div className="mr-2">
            <SiAddthis
              onClick={handleNoteOpening}
              className="text-white text-5xl transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="">
            <h1 className="text-white text-5xl font-bold">KEYNOTES</h1>
          </div>
        </div>

        {/* modal */}
        {isModalOpen && (
          <div className="backdrop fixed inset-0 bg-gray-800 bg-opacity-50 z-30">
            <form method="post" action="">
              <div className="bg-gray-200 z-20 h-[320px] absolute top-0 bottom-0 left-0 right-0 m-auto w-[420px] rounded-2xl shadow-2xl">
                <div className="p-2 flex bg-blue-700 rounded-t-2xl w-[100%]">
                  <div className="ml-2 w-[50%]">
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      required
                      className="pl-2 text-xl text-blue-700 font-bold rounded-xl"
                    />
                  </div>
                  <div className="flex mt-1 ml-32 w-[50%]">
                    <div className="" onClick={handleModalOpen}>
                      <RxCross2 className="text-white transform transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer text-2xl" />
                    </div>
                    <div className="">
                      <FaCheck className="text-white transform transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer ml-1 text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="content p-3 text-justify">
                  <textarea
                    type="text"
                    name="para"
                    placeholder="write your keynote here..."
                    required
                    id=""
                    className="w-full text-blue-700 p-2 h-[250px] "
                  />
                </div>
              </div>
            </form>
          </div>
        )}

        {/* creating the note */}
        {iscreateNoteOpen && (
          <div className="backdrop fixed inset-0 bg-gray-800 bg-opacity-50 z-30">
            <form
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="bg-gray-200 z-20 h-[320px] absolute top-0 bottom-0 left-0 right-0 m-auto w-[420px] rounded-2xl shadow-2xl">
                <div className="p-2 flex bg-blue-700 rounded-t-2xl w-[100%]">
                  <div className="ml-2 w-[50%]">
                    <input
                      type="text"
                      name="title"
                      value={title}
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="pl-2 text-xl text-blue-700 font-bold rounded-xl"
                    />
                  </div>
                  <div className="flex mt-1 ml-32 w-[50%]">
                    <div className="" onClick={handleNoteOpening}>
                      <RxCross2 className="text-white transform transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer text-2xl" />
                    </div>
                    <button className="" type="submit">
                      <FaCheck className="text-white transform transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer ml-1 text-2xl" />
                    </button>
                  </div>
                </div>
                <div className="content p-3 text-justify">
                  <textarea
                    type="text"
                    name="para"
                    value={para}
                    onChange={(e) => setPara(e.target.value)}
                    placeholder="write your keynote here..."
                    required
                    id=""
                    className="w-full text-blue-700 p-2 h-[250px] "
                  />
                </div>
              </div>
            </form>
          </div>
        )}

        {/* keynote card */}

        <div className="grid grid-cols-4 gap-4">
          <div className="notes pt-10 flex z-10 justify-between gap-10">
            <div className="ml-10 bg-gray-200 h-[250px] w-[300px] rounded-2xl shadow-xl">
              <div className="p-2 flex bg-blue-700 rounded-t-2xl w-[100%]">
                <div className="ml-2 w-[50%]">
                  <h3 className="text-white font-bold text-3xl">Title</h3>
                </div>
                <div className="flex mt-1 ml-32 w-[50%]">
                  <div className="">
                    <MdModeEdit
                      onClick={handleModalOpen}
                      className="text-white text-2xl transform transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer"
                    />
                  </div>
                  <div className="ml-2">
                    <MdDelete className="text-white text-2xl transform transition-transform duration-300 ease-in-out hover:scale-125 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="content p-3 text-justify">
                <p className="text-blue-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, quam quod incidunt odio eveniet ipsam perferendis
                  nesciunt laborum minima fugit hic asperiores nihil porro eos
                  architecto maxime, inventore, eligendi molestias.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="notes pt-10 flex z-10 justify-between gap-10">
            <div className="ml-10 bg-gray-200 h-[250px] w-[300px] rounded-2xl shadow-xl">
              <div className="p-2 flex bg-blue-700 rounded-t-2xl w-[100%]">
                <div className="ml-2 w-[50%]">
                  <h3 className="text-white font-bold text-3xl">Title</h3>
                </div>
                <div className="flex mt-1 ml-32 w-[50%]">
                  <div className="">
                    <MdModeEdit
                      onClick={handleModalOpen}
                      className="text-white text-2xl"
                    />
                  </div>
                  <div className="ml-2">
                    <MdDelete className="text-white text-2xl" />
                  </div>
                </div>
              </div>
              <div className="content p-3 text-justify">
                <p className="text-blue-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, quam quod incidunt odio eveniet ipsam perferendis
                  nesciunt laborum minima fugit hic asperiores nihil porro eos
                  architecto maxime, inventore, eligendi molestias.
                </p>
              </div>
            </div>
          </div>
          <div className="notes pt-10 flex z-10 justify-between gap-10">
            <div className="ml-10 bg-gray-200 h-[250px] w-[300px] rounded-2xl shadow-xl">
              <div className="p-2 flex bg-blue-700 rounded-t-2xl w-[100%]">
                <div className="ml-2 w-[50%]">
                  <h3 className="text-white font-bold text-3xl">Title</h3>
                </div>
                <div className="flex mt-1 ml-32 w-[50%]">
                  <div className="">
                    <MdModeEdit
                      onClick={handleModalOpen}
                      className="text-white text-2xl"
                    />
                  </div>
                  <div className="ml-2">
                    <MdDelete className="text-white text-2xl" />
                  </div>
                </div>
              </div>
              <div className="content p-3 text-justify">
                <p className="text-blue-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, quam quod incidunt odio eveniet ipsam perferendis
                  nesciunt laborum minima fugit hic asperiores nihil porro eos
                  architecto maxime, inventore, eligendi molestias.
                </p>
              </div>
            </div>
          </div>
          <div className="notes pt-10 flex z-10 justify-between gap-10">
            <div className="ml-10 bg-gray-200 h-[250px] w-[300px] rounded-2xl shadow-xl">
              <div className="p-2 flex bg-blue-700 rounded-t-2xl w-[100%]">
                <div className="ml-2 w-[50%]">
                  <h3 className="text-white font-bold text-3xl">Title</h3>
                </div>
                <div className="flex mt-1 ml-32 w-[50%]">
                  <div className="">
                    <MdModeEdit
                      onClick={handleModalOpen}
                      className="text-white text-2xl"
                    />
                  </div>
                  <div className="ml-2">
                    <MdDelete className="text-white text-2xl" />
                  </div>
                </div>
              </div>
              <div className="content p-3 text-justify">
                <p className="text-blue-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, quam quod incidunt odio eveniet ipsam perferendis
                  nesciunt laborum minima fugit hic asperiores nihil porro eos
                  architecto maxime, inventore, eligendi molestias.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Page;
