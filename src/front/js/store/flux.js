const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      courses: [
        {
          font: "fa-code",
          title: "Full Stack Development",
          description:
            "Become a Full Stack Developer with our self-paced bootcamp!",
          salary: "$55K",
          jobPositions: "+350.000",
          careerGrowth: "45%",
        },
        {
          font: "fa-flask",
          title: "Data Science",
          description: "Join our Data Science and Machine Learning bootcamp!",
          salary: "$75K",
          jobPositions: "+500.000",
          careerGrowth: "75%",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      addCourse: (course) => {
        const store = getStore();
        setStore({ courses: [...store.courses, course] });
      },
    },
  };
};

export default getState;
