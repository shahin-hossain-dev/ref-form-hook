import { useRef } from "react";
import "./App.css";
import { InView, useInView } from "react-intersection-observer";
function App() {
  const { ref, inView, entry } = useInView({
    // options
    // option গুলো দিয়ে বিভিন্ন customization করা যায়,
    threshold: 0,
    // delay: 2000, //এখানে delay 2s পরে effect করবে।
  });
  console.log(inView); // section যদি viewport এ থাকে তাহলে inView true return করবে।

  return (
    <>
      <section
        ref={ref}
        style={{
          background: "gray",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Header</h2>
      </section>
      {/* section 1 */}
      <section
        // observe করার জন্য প্রতি section এ ref={ref} declare করতে হবে।
        ref={ref}
        style={{
          background: inView ? "blue" : "salmon",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Section1 {`${inView}`} </h2>
      </section>
      {/* section 2 */}
      <section
        ref={ref}
        style={{
          background: inView ? "salmon" : "goldenrod ",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Section2 {`${inView}`}</h2>
      </section>
      {/* section 3 */}
      <section
        style={{
          background: "goldenrod",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Section3 {`${inView}`}</h2>
      </section>
      <InView>
        {({ inView, ref, entry }) => (
          <div
            ref={ref}
            style={{
              delay: "1000s",
              background: inView ? "red" : " goldenrod",
              height: "100vh",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>{`Header inside viewport ${inView}.`}</h2>
          </div>
        )}
      </InView>
    </>
  );
}

export default App;
