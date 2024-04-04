import { EXAMPLES } from '../../data.js';
import Section from '../Section/Section.jsx';
import TabButton from '../Tab Button/TabButton.jsx';
import Tabs from '../Tabs/Tabs.jsx';
import { useState } from 'react';

export default function Examples() {
    const [topic, setTopic] = useState();

    function handleClick(selectedTopic) {
        setTopic(selectedTopic);
    }

    let tabContent = <p>Please select a topic</p>;
    if (topic) {
        tabContent =
            <div id='tab-content'>
                <h3>{EXAMPLES[topic].title}</h3>
                <p>{EXAMPLES[topic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[topic].code}
                    </code>
                </pre>
            </div>;
    }

    return (
        <Section id='examples' title='Examples'>
            <Tabs
                buttons={
                    <>
                        <TabButton label='Components' onClick={() => handleClick('components')} isSelected={topic === 'components'} />
                        <TabButton label='JSX' onClick={() => handleClick('jsx')} isSelected={topic === 'jsx'} />
                        <TabButton label='Props' onClick={() => handleClick('props')} isSelected={topic === 'props'} />
                        <TabButton label='State' onClick={() => handleClick('state')} isSelected={topic === 'state'} />
                    </>}>
                {tabContent}
            </Tabs>
        </Section>
    );
}