import './StorybookGithubLink.css';

type Props = {
    label: string;
    path: string;
};

export default function StorybookGithubLink(props: Props) {
    return (
        <a
            className="answer-link"
            target="_blank"
            href={`https://github.com/jack-vo/full-stack-class/tree/main/${props.path}`}
        >
            {props.label}
        </a>
    );
}
