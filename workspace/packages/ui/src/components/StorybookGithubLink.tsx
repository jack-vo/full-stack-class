import { CSSProperties } from 'react';
import './StorybookGithubLink.css';

type Props = {
    label: string;
    path: string;
    password?: string;
};

const style: CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#222',
    color: '#fff',
    textDecoration: 'none',
    position: 'fixed',
    fontSize: '1.1em',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
};

export default function StorybookGithubLink(props: Props) {
    const { path, password } = props;
    const link = `https://github.com/jack-vo/full-stack-class/tree/main/${path}`;
    const onClick = () => {
        if (password) {
            const pwd = prompt('Enter the password');

            if (pwd === password) {
                window.open(link, '_blank');
            } else {
                alert('Invalid password');
            }
        } else {
            window.open(link, '_blank');
        }
    };

    return (
        <button className="answer-link" style={style} onClick={onClick}>
            {props.label}
        </button>
    );
}
