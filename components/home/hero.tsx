'use client'
import styles from '@/styles/home.module.css';
import svg from '@/public/SVG.svg';
import Image from 'next/image';
import heroImage from '@/public/image101.jpeg'

export default function Hero(){
    return (
        <div className={styles.hero}>
            <div className="relative w-full h-[600px] md:h-[400px] bg-cover bg-center brightness-[.6] overflow-hidden">
                <Image src={heroImage} alt="" className="object-center w-full h-[100vh]"/>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-[5px] pt-[10%] md:pt-0">
                <div className={'flex flex-col justify-center items-center'}>
                    <p className={styles.luxury}>Luxury shortlet apartments in Lekki and VI Lagos</p>
                    <p className={'text-[9px] md:text-[12px] text-white text-center px-[10px] md:px-0'}>
                        Get the best prices on over 300 serviced shortlet apartments accross 6 Properties in Chevron, Lekki Phase1 and Victoria Island
                    </p>
                </div>
                <div className={'flex flex-col md:flex-row bg-white md:p-[5px] rounded-md w-[80%] md:w-[60%] justify-between items-start md:items-center p-[5px_10px] gap-[5px] md:gap-0'}>
                    <div className={'flex flex-col gap-[2px] md:gap-0'}>
                        <p className={'text-[8px] md:text-[10px] text-[#FE6A00] font-bold caption-top'}>Get special offers, and more from Heristays shortlets.</p>
                        <p className={'text-[10px]  font-thin'}>Subscribe to see secret deals, prices and reductions</p>
                    </div>
                    <div className={'flex justify-center items-center border-[1px] border-gary-500 rounded-md w-[100%] md:w-[50%] p-[2px] gap-[7px] md:px-[5px] px-[7px]'}>
                        <div className={'w-[25px] h-[25px]'}>
                            <Image src={svg} alt={''} className={'w-[25px] h-[25px]'}/>
                        </div>
                        <input type="text" className={' w-full md:w-[100%] outline-none'} />
                    </div>
                    <button className={'text-white bg-[#FE6A00] rounded-2xl p-[3px_5px] md:p-[5px_7px] text-xs md:text-sm font-thin'}>Submit</button>
                </div>

            </div>

        </div>
    )
}