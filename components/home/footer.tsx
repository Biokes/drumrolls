import home from  '@/public/home.svg'
import Image from 'next/image'
export default function Footer(){
    return (
        <div className={'pt-[50px] flex flex-col lg:flex-row gap-[30px] sm:pl-[20%] lg:pl-0'}>
            <div className={'pl-[10px] w-full md:w-[400px]'}>
                <p className={'text-[18px] md:text-[20px] font-bold'}>Contact Information</p>
                <div className={'flex flex-col gap-[13px] pt-[20px] pl-[20px]'}>
                    <p className={'font-bold text-[13px] md:text-[16px]'}>Please reach out to us if you have any questions</p>
                    <div className={'flex gap-[10px]'}>
                        <Image src={home} alt={''} className={'w-[12px] h-[12px]'}/>
                        <p className={'text-[12px] md:text-[15px]'} style={{fontFamily: 'Roboto Slab'}}>+234 (916) 984-5070</p>
                    </div>
                    <div className={'flex gap-[10px]'}>
                        <Image src={home} alt={''} className={'w-[12px] h-[12px]'}/>
                        <p className={'text-[12px] md:text-[15px]'} style={{fontFamily: 'Roboto Slab'}}>+234 (916) 984-5072</p>
                    </div>
                    <div className={'flex gap-[10px]'}>
                        <Image src={home} alt={''} className={'w-[12px] h-[12px]'}/>
                        <p className={'text-[12px] md:text-[15px]'} style={{fontFamily: 'Roboto Slab'}}>info@heristays.com</p>
                    </div>
                    <div className={'flex gap-[10px]'}>
                        <Image src={home} alt={''} className={'w-[12px] h-[12px]'}/>
                        <p className={'text-[12px] md:text-[15px]'} style={{fontFamily: 'Roboto Slab'}}>+234 (916) 984-5077</p>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col lg:flex-row gap-[15px] pl-[15px] md:pl-0'}>
                <input type="text" placeholder={'Full Name'} className={'w-[220px] sm:w-[50%] h-[50px] p-[10px_15px] rounded-md border-1 outline-none'}/>
                <input type="email" placeholder={'Email'} className={'w-[220px] sm:w-[50%] h-[50px] p-[10px_15px] rounded-md border-1 outline-none'}/>
                <input type="text" placeholder={'Phone Number'} className={'w-[220px] sm:w-[50%] h-[50px] p-[10px_15px] rounded-md border-1 outline-none'}/>
                <textarea className="w-[220px] sm:w-[50%] h-[100px] p-2 border rounded-md resize-none outline-none" placeholder="Enter your text here"/>
                <button className={'text-sm font-bold h-[40px] text-center bg-[#FE6A28] text-white w-[150px] rounded-md'}>Send Message</button>
            </div>
        </div>
    )
}