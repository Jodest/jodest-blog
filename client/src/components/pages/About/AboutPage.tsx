import React from 'react';

interface Props {
};

const AboutPage: React.SFC<Props> = () => {

  const getCurrentAge = (): number => {
    const birthDate = new Date(1992, 8, 3);

		const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear();

		return age;
  }

  return (
    <div>
        <h1>About</h1>
        <p>My name is Dmitry Karev. I am {getCurrentAge()} years old. I am frontend-developer from Nizhniy Novgorod, Russia. I work in MERA-NN.</p>
    </div>
  );
};

export default AboutPage;
