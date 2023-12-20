import { RefObject } from "react";

export default function Signing(props: { passedRef: RefObject<HTMLDialogElement>; }) {
    function cleanModal() {
        document.body.style.overflow = '';
        props.passedRef.current?.close();
    }

    return (
        <dialog onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
            if (e.key === "Escape") {
                document.body.style.overflow = '';
                props.passedRef.current?.close();
            }
        }} ref={props.passedRef} className="modal">
            <div className="ht-300 row justify-end">
                <button onClick={() => cleanModal()}>
                    <img className="wd-200" src="/assets/icon-add.svg" alt="" />
                </button>
            </div>
            <div className="row gp-400 mg-bl-100">
                <button className="bold underline fs-md">SIGN IN</button>
                <button className="semi-bold fs-md text-grey">SIGN UP</button>
            </div>

            <div>
                <h3 className="fs-md semi-bold">Signin to access your Inverse member perks.</h3>
                <div className="signin-input">
                    <input type="text" placeholder="Email" name="" id="" />
                    <input type="text" placeholder="Password" name="" id="" />
                </div>
            </div>

            <div>

            </div>
        </dialog>

    );
}