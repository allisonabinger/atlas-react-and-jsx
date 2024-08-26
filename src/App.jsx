import Header from "./components/Header";
import Section from "./components/Section";


function App() {
    return (
        <div>
          <Header />
          <Section title="What is react?">
            React is a JavaScript library developed by Meta (formerly Facebook) used to make powerful interactive user interfaces.
            It uses a component-based architecture for a modular and reusable build that can be easier to scale and maintain. React also improves performance
            by utilizing a virtual DOM to efficiently update changes in the UI and render it to the user. With a strong ecosystem that uses other tools and libraries and Redux,
            Next.js, and React Router, it provides a strong and flexible framework for dynmaic web applications and interfaces.
          </Section>
          <Section title="Benefits of React">
            <ul>
                <li>Modular - Easily reuse components within your application.</li>
                <li>Active Community - React remains a popular framework with an active community</li>
                <li>Cross Platform - React works within iOS and Android apps</li>
                <li>Efficient Performance - Using the Virtual DOM allows for efficient user interactions and data chagnes</li>
                <li>Custom Dev Tools - Official React Developer Tools extensions are available for Chrome and Firefox</li>
            </ul>
          </Section>
        </div>
      );
}

export default App;
