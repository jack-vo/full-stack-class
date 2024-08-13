type Props = {
    label: string;
    prefix: string;
    name: string;
};

export default function AnswerLink(props: Props) {
    return (
        <a
            className="answer-link"
            target="_blank"
            href={`https://github.com/jack-vo/full-stack-class/tree/main/workspace/packages/${props.prefix}/${props.name}`}
        >
            {props.label}
        </a>
    );
}
