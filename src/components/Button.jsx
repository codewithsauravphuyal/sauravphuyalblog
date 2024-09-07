export default function Button(props) {
    return (
        <>
            <button style={{ backgroundColor: props.bgcolor }} onClick={props.onClick}>{props.text}</button>
        </>
    )
}