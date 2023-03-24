import { default as FadeIn } from 'react-fade-in';

export function Toast({title}: {title?: string}) {
    return (
        <div className="relative inset-0 m-auto z-60 w-full">
            <div className="absolute bottom-0 w-full">
                <FadeIn>
                    <div className="flex flex-grow items-end align-bottom justify-center text-center w-full">
                        <div className="flex bg-[#359C5F] w-full rounded-lg items-center text-white font-bold text-[16px] tracking-wider p-5">
                            <img className="mr-4" width="21px" height="21px" src="https://hackaton-bobby-dazzlers.s3.ap-southeast-2.amazonaws.com/icon_check.png" alt="Checkmark" />

                            <div>
                                {title}
                            </div>

                            <div className="cursor-pointer absolute right-5 mr-2">
                                <img src="https://hackaton-bobby-dazzlers.s3.ap-southeast-2.amazonaws.com/icon_close_green.png"  alt="dismiss" />
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};