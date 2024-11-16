import Image from 'next/image'
import phone from '@/public/Symbol (1).svg'
import phoneNumber from '@/public/Symbol.svg'
import mail from '@/public/Symbol (2).svg'
import file from '@/public/Symbol.png'
import facebook from '@/public/Text.svg'
import empty from '@/public/window.svg'
import pinterest from '@/public/Text (1).svg'
import instagram from '@/public/Text (2).svg'
import youtube from '@/public/Text (3).svg'
import Images from '@/public/Frame-3182.svg.svg'
import styles from '@/styles/home.module.css'
export default function Footer(){
    const icons  = [
        facebook,empty,pinterest,instagram,youtube
    ]
    return (
        <div>
            <div className={'pt-[50px] flex flex-col lg:flex-row gap-[30px] sm:pl-[15%] overflow-hidden'}>
                <div className={'pl-[10px] w-full md:w-[400px]'}>
                    <p className={'text-[18px] md:text-[20px] font-bold text-black'}>Contact Information</p>
                    <div className={'flex flex-col gap-[13px] pt-[20px] pl-[20px]'}>
                        <p className={'font-bold text-[13px] md:text-[16px] text-black'}>Please reach out to us if you
                            have any questions</p>
                        <div className={'flex gap-[10px]'}>
                            <Image src={phoneNumber} alt={''} className={'w-[14px] h-[14px]'}/>
                            <p className={'text-[12px] md:text-[15px] text-black'}
                               style={{fontFamily: 'Roboto Slab'}}>+234 (916) 984-5070</p>
                        </div>
                        <div className={'flex gap-[10px]'}>
                            <Image src={phone} alt={''} className={'w-[14px] h-[14px]'}/>
                            <p className={'text-[12px] md:text-[15px] text-black'}
                               style={{fontFamily: 'Roboto Slab'}}>+234 (916) 984-5072</p>
                        </div>
                        <div className={'flex gap-[10px]'}>
                            <Image src={mail} alt={''} className={'w-[14px] h-[14px]'}/>
                            <p className={'text-[12px] md:text-[15px] text-black'}
                               style={{fontFamily: 'Roboto Slab'}}>info@heristays.com</p>
                        </div>
                        <div className={'flex gap-[10px]'}>
                            <Image src={file} alt={''} className={'w-[14px] h-[14px]'}/>
                            <p className={'text-[12px] md:text-[15px] text-black'}
                               style={{fontFamily: 'Roboto Slab'}}>+234 (916) 984-5077</p>
                        </div>
                    </div>
                    <div className={'flex gap-[5px] pl-[20px] pt-[30px]'}>
                        {
                            icons.map((item, index) => (
                                <div key={index}
                                     className={'rounded-2xl p-1 border-[1px] flex justify-center items-center overflow-hidden h-[25px] w-[25px]'}>
                                    <Image src={item} alt={''} className={'object-contain object-center'}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div
                    className={'flex flex-col lg:grid gap-[15px] pl-[25px] md:pl-0 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto] lg:w-[500px]'}>
                    <input
                        type="text"
                        placeholder={'Full Name'}
                        className={'w-[70%] sm:w-[50%] h-[50px] lg:w-[100%] p-[10px_15px] rounded-md border outline-none lg:order-1'}
                    />
                    <input
                        type="email"
                        placeholder={'Email'}
                        className={'w-[70%] sm:w-[50%] h-[50px] lg:w-[100%] p-[10px_15px] rounded-md border outline-none lg:order-2'}
                    />
                    <input
                        type="text"
                        placeholder={'Phone Number'}
                        className={'w-[70%] sm:w-[50%] h-[50px] lg:w-[100%] p-[10px_15px] rounded-md border outline-none lg:order-3'}
                    />
                    <textarea
                        className="w-[70%] sm:w-[50%] h-[100px] lg:w-[100%] lg:col-span-3 p-2 border rounded-md resize-none outline-none lg:order-4"
                        placeholder="Enter your text here"
                    />
                    <button
                        className={'text-sm font-bold h-[40px] text-center bg-[#FE6A28] text-white w-[150px] rounded-md lg:order-5 lg:col-start-1'}
                    >
                        Send Message
                    </button>
                </div>
            </div>
            <div className="flex justify-center items-center mt-[40px]">
                <div className={styles.framer}>
                    <p className="text-gray-700 text-[7px]">© Copyright Heristays 2024. Heristays is a product of Drumroll Digital</p>
                    <Image src={Images} alt="Logo" className="w-[230px]"/>
                </div>
            </div>
        </div>
    )
}