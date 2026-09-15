function HelloWolrd(props: { name: string}) {
    let { name } = props;
    return (
        <div>
            <div>Hello World {name}</div>
        </div>
    );
}

export default HelloWolrd;