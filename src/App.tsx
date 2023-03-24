import React, { useEffect, useState } from 'react';
import './App.css';
import Confetti from 'react-confetti'
import { default as FadeIn2 } from 'react-fade-in';
import { Modal } from './Modal';
import { Toast } from './Toast';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [modalManuallyClosed, setModalManuallyClosed] = useState(false);
  const [showBoxModal, setShowBoxModal] = useState(false);
  const [showPrizeModal, setShowPrizeModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [appMockImages] = useState([
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg',
    'img11.jpg',
    'img12.jpg',
  ]);
  const [prize, setPrize] = useState<any>(null);

  const [prizes] = useState([
    // {
    //   type: 'voucher',
    //   value: 'A 10% OFF voucher*',
    //   code: 'DEFEATTHEHOMEPAGE3ba612',
    //   conditions: '*when you spend min $100. Can be used with other offers. T&Cs apply.'
    // },
    {
      type: 'voucher',
      value: 'A $15 voucher*',
      code: 'MYSTERYBOX3bpl4c2',
      conditions: '*Voucher valid until 24/04/23. Min spend $150. Can be used on top of other promotions. T&Cs apply.'
    },
    // {
    //   type: 'voucher',
    //   value: 'Free shipping*',
    //   code: 'DEFEATTHEHOMEPAGE3ba612',
    //   conditions: '*when you spend min $30. Can be used with other offers. T&Cs apply.'
    // }
  ]);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const prize = prizes[Math.floor(Math.random() * prizes.length)];
    setPrize(prize);
  }, []);

  useEffect(() => {
    if(scrollPosition > 0 && scrollPosition >= (document.documentElement.scrollHeight - window.innerHeight)) {
      setShouldShowModal(true);
    } else {
      setShouldShowModal(false);
    }
  }, [scrollPosition]);

  const closeModal = () => {
    setModalManuallyClosed(true);
  }

  const openPrizeBox = () => {
    closeModal();
    setShowBoxModal(true);

    setTimeout(() => {
      setShowBoxModal(false);
      setPrize(prizes[Math.floor(Math.random() * prizes.length)]);
      openMisteryBox();
    }, 4500);
  }

  const openMisteryBox = () => {
    closeModal();
    setShowPrizeModal(true);
  }

  return (
    <>
      <div className={`w-full h-full overflow-y-auto lg:flex lg:items-center lg:justify-center ${shouldShowModal ? 'overflow-y-hidden' : ''}`} >
        <div className="App lg:max-w-sm lg:text-center lg:content-center">
          {appMockImages && appMockImages.map((img, index) => {
            return (
              <img key={index} width={'100%'} height={'100%'} src={`https://hackaton-bobby-dazzlers.s3.ap-southeast-2.amazonaws.com/${img}`} alt={img} />
            )
          })}

          <div className="bg-white p-5">
            <div className="flex align-middle content-center items-center mt-5 mb-5">
              <div className="w-full h-[.7px] bg-[#A8A8A8]"></div>
              <img width='140px' src="https://hackaton-bobby-dazzlers.s3.ap-southeast-2.amazonaws.com/Green+tick.gif"  alt="img1" />
              <div className="w-full h-[.7px] bg-[#A8A8A8]"></div>
            </div>

            <div className="text-[14px] text-[#696969] mt-5 mb-10 text-center font-bold">
              You have reached the end
            </div>
          </div>
        </div>
      </div>

      {shouldShowModal && !modalManuallyClosed && (
          <Modal title="Woo hoo!" closeModalHandler={closeModal}>
            <Confetti numberOfPieces={200} colors={['#42ABC8']} recycle={false} />

            <div className="mt-5 text-center text-[20px] w-[60%] m-auto">
              You have reached the end of the homepage
            </div>

            <div className='text-center align-middle mb-5'>
              <img src="https://hackaton-bobby-dazzlers.s3.ap-southeast-2.amazonaws.com/Gift+box.png" className="m-auto" alt="dismiss" />
            </div>

            <div className="mt-5 text-center text-[20px]">
              Tap to open your mystery box
            </div>

            <button className="bg-[#42ABC8] w-full border-r-2 text-white font-bold text-center p-3 text-xs mt-5 cursor-pointer">
              <div onClick={openPrizeBox}>
                UNBOX YOUR REWARD
              </div>
            </button>

            <br /><br /><br />
          </Modal>
        )}

        {showBoxModal && (
          <Modal>
            <img width={'100%'} height={'100%'} src="https://i.pinimg.com/originals/fd/2c/1a/fd2c1a96b654e220d09525f006482477.gif"  alt="prize" />
            <br /><br /><br />
          </Modal>
        )}

        {showPrizeModal && (
          <Modal title="You have won!" closeModalHandler={() => setShowPrizeModal(false)}>
            <FadeIn2>
              <div className="mt-10 mb-5">
                <div className="text-center text-[20px] py-2 font-bold bg-[#EFEFEF] border-[#EFEFEF] border-solid border-2 rounded-md w-full">
                  {prize.value}
                </div>
              </div>

              {prize.type === 'voucher' && (
                <div className="text-center text-[20px] mb-2">
                  Copy unique voucher code:
                </div>
              )}

              <div className="flex align-middle content-center items-center text-center w-full">
                <div className="flex align-middle content-center items-center m-auto border-[#A8A8A8] border-[1px] py-2 px-4 rounded-md">
                  <div className="cursor-pointer mr-3" onClick={() => {setShowToast(true); setTimeout(() => setShowToast(false), 2000)}}>
                    <img src="https://hackaton-bobby-dazzlers.s3.ap-southeast-2.amazonaws.com/icon_copy.png"  alt="dismiss" />
                  </div>

                  <div className="w-full font-bold font-sm">
                    {prize.code}
                  </div>
                </div>
              </div>

              <div className="text-center text-[14px] mt-4 mb-6">
                This code has also been sent to your email!
              </div>

              {prize.type === 'voucher' && (
                <button className="bg-[#42ABC8] w-full border-r-2 text-white font-bold text-center p-3 text-x mt-4 mb-4 cursor-pointer" onClick={() => {setShowPrizeModal(false); window.scrollTo(0, 0)}}>
                  <div>
                    GO BACK TO THE HOMEPAGE
                  </div>
                </button>
              )}

              <div className="text-center text-sm text-[#232323]">
                {prize.conditions}
              </div>

              {showToast && (
                <Toast title='Code copied'/>
              )}
            </FadeIn2>
          </Modal>
        )}
    </>
  );
}

export default App;
