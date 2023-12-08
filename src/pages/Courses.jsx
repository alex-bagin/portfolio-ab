import CoursBoxItem from "../components/CoursBoxItem";

const Courses = () => {
  return (
    <section className="courses section" id="courses">
      <div className="courses__inner container">
        <div className="title">
          <h2>Besuchte Kurse</h2>
          <p>Zuletzt besuchte Kurse zur Verbesserung meiner Fähigkeiten und Kenntnisse.</p>
        </div>
        <CoursBoxItem
          courses={[
            {
              name: "Der ultimative JavaScript Komplettkurs",
              src: "../../img/Kurse/Der ultimative JavaScript Komplettkurs.jpeg",
              href: "https://www.udemy.com/share/103CP63@RoifIkCLVsgtzfjg95FwjhDkM2P35MAka7whHTNSzR0Ix9U1ZrE-3zWEJaF7fcBt1Q==/",
              description: ``,
            },
            {
              name: "Praxisorientierte Kurs (Mongo, GraphQL, MySQL, Express)",
              src: "../../img/Kurse/Node JS.(Mongo, GraphQL, MySQL, Express).jpeg",
              href: "https://www.udemy.com/share/102ILc3@RJfbl3GJ39P7PC5_qFikUmuVLbdJ3S_ldjigsCgDTgtKIlj_s3dxyJeMohqYVzsd0g==/",
              description: ``,
            },
            {
              name: "React JS фундаментальный курс от А до Я",
              src: "../../img/Kurse/React JS found-course.jpeg",
              href: "https://www.youtube.com/watch?v=GNrdg3PzpJQ&list=PL6DxKON1uLOHya4bDIynPTCwZHrezUlFs",
              description: ``,
            },
            {
              name: "ТОП 5 REACT ХУКОВ (React hooks). Делаем свои React хуки",
              src: "../../img/Kurse/top 5 react hooks.jpeg",
              href: "https://www.youtube.com/watch?v=ks8oftGP2oc&list=PL6DxKON1uLOHya4bDIynPTCwZHrezUlFs&index=2",
              description: ``,
            },
            {
              name: "React Router v6",
              src: "../../img/Kurse/React Router v6.png",
              href: "https://reactrouter.com/en/main/start/tutorial",
              description: ``,
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Courses;
