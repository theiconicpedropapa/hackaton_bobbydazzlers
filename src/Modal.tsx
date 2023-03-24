export function Modal({title, closeModalHandler, ...props}: {title?: string, closeModalHandler?: () => void, children: React.ReactNode}) {
    return (
        <div className="fixed m-auto z-50 inset-0 overflow-y-auto lg:max-w-sm w-full">
            <div className="flex items-end align-bottom justify-center min-h-screen text-center sm:block sm:p-0 w-full">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-bottom sm:h-screen"></span>&#8203;
                <div className="inline-block align-middle bg-white rounded-t-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg w-full">
                    <div className="flex align-middle content-center items-center text-center w-full">
                        {title && (
                            <div className="w-full font-bold text-[28px]">
                                {title}
                            </div>
                        )}

                        {closeModalHandler && (
                            <div className="cursor-pointer absolute right-5" onClick={closeModalHandler}>
                                <img src="https://hackaton-bobby-dazzlers.s3.ap-southeast-2.amazonaws.com/dismiss.png"  alt="dismiss" />
                            </div>
                        )}
                    </div>

                    {props.children}
                </div>
            </div>
        </div>
    )
}