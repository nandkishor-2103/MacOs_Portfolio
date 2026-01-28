import WindowControls from '#components/WindowControls';
import { socials } from '#constants/index';
import WindowWrapper from '#hoc/WindowWrapper';

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target='contact'/>
        <h2>Contact Me</h2>
      </div>
      <div className='p-5 space-y-5'>
        <img src="/images/profile.jpg" alt="Nandkishor" className='w-20 rounded-full' />
        <h3>Let's Connect</h3>
        <p>Got an idea, found a bug, or just want to talk frontend and full-stack? I’m in.</p>
        <p className='font-medium'>nandkishormandalbk@gmail.com</p>

        <ul>
          {
            socials.map(({id, bg, link, icon, text}) => (
              <li key={id} style={{backgroundColor: bg}}>
                <a href={link}
                target='_blank'
                rel='noopener noreferrer'
                title={text}
                >
                  <img src={icon} alt={text}  className='size-5'/>
                  <p>{text}</p>
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;
