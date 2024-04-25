// This is the file for the FAQs section , right side of figma file.


// Imports go here

function Faqs() {
    // User state (If necessary) goes here
    return (
        <>
        <img className="bg-[#26272D] lg:scale-100 scale-y-150 overflow-hidden   fill-[#202127]" src="/mosque.png" alt="" />
        <div className="bg-[#202127]">
        {/* Text */}
        <h1 className="text-white text-4xl p-36">Frequently asked questions</h1>
        {/* Columns */}
        <div className="bg-[#202127]  flex flex-row justify-between px-36 ">
            <div className="cards">Hello</div>
            <div className="text-render-container flex flex-col justify-between h-[40vh]">
                <div>
                1
                </div>
                <div>
                2
                </div>
            </div>
        </div>
        </div>

        </>
    );
}
// Any helper functions/components go here

export default Faqs;