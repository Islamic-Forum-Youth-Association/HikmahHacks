// Imports go here

function Blog_strip() {
    // User state (If necessary) goes here
    const today = new Date();
    return (
        <>
        {/* // JSX goes here. */}
        <h1>
            Hello World today is {today.toDateString()}
        </h1>
        {/* className = "tailwindcss attributes, install tailwind autocomplete on your editor to see these options" */}
        <button className="rounded-xl bg-green-400 py-4 px-5 mt-3">Register</button>
        </>
    );
}
// Any helper functions/components go here

export default Blog_strip;