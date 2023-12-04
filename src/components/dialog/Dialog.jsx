const Dialog = ({ idDialog = "", children = <></> }) => {
    return <dialog id={idDialog}>{children}</dialog>;
};

export default Dialog;
