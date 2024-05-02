// This is the file for the FAQs section , right side of figma file.


// Imports go here

function Faqs() {
    // User state (If necessary) goes here
    return (

        // JSX goes here.


        <div className="container px-auto min-w-[100vw] bg-[#202127]">
            <div className="grid xl:grid-cols-2 grid-rows-2 scale-90  ">
                <div className="p-4">
                    <h1 className="text-white text-3xl mx-auto xl:px-64 my-[6vh]">Frequently asked questions</h1>
                    <div className="space-y-6 xl:ml-64 mb-12">
                        {QAs.map((qa, index) => (
                            <div key={index} className={`text-[#26272D] scale-40 hover:text-white active:marker: bg-[#4FFFA0] rounded-xl text-2xl xl:px-[9vw] flex justify-around xl:w-[32vw] w-[100vw] static xl:gap-x-36 items-center h-[12vh] hover:bg-[#021416] cursor-pointer ${selectedQA === qa && 'bg-gray-800 text-white hover:bg-gray-600'}`} onClick={() => handleTabClick(qa)}>
                                <div className="flex items-center">
                                    <FaCode size={24} className="mr-2" />
                                    <div className="text-lg">{qa.question}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="xl:p-32 mx-auto  w-[100%]  ">
                    {selectedQA && (
                        <div>
                            <h2 className="text-white text-3xl mb-4">{selectedQA.question}</h2>
                            <div className="text-white  xl:w-[40vw] w-auto ">{selectedQA.answer}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
// Any helper functions/components go here

export default Faqs;