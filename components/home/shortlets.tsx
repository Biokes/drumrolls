'use client'
import styles from '@/styles/home.module.css'
import search from '@/public/Component 1.svg'
import image104 from '@/public/map105.jpeg'
import image105 from '@/public/map104.jpeg'
import Image, {StaticImageData} from 'next/image'
import home from  '@/public/home.svg'
import love from '@/public/love.png'
import location from '@/public/Icon.svg'

interface Day{
    day:number,
    percent:string
}
interface ImageData {
    price:string,
    apartment:string,
    address:string,
    house:string,
    image:StaticImageData
}
export default function Shortlet(){
    const days: Day[] = [
        {day:2, percent:'10% Off,'},
        {day:7, percent:'15% Off,'},
        {day:30, percent:'30% Off,'},
        {day:90, percent:'50% Off'},

    ]
    const images:ImageData[] = [
        {image:image104,apartment:'Sigmabase Apartments VI', address:'7/9 Molade Okoya street Off Ajose Adeogun VI', price:'63,000', house:'Studios and One Bedroom Apartments'},
        {image:image105,apartment:'Footprint Apartments Lekki', address:'21 Awudu Ekpekha St. Off Admiralty Lekki Ph1', price:'70,000', house:'Studios and One Bedroom Apartments'},
        {image:image104,apartment:'House 4 Apartments Lekki', address:'4 Chief Yemi Idowu Way, Lekki Lagos', price:'63,000', house:'Studios and One Bedroom Apartments'},
        {image:image105,apartment:'Perugia Apartments Lekki', address:'4 Patience Olukayode Close, Lekki Phase1, Lagos', price:'68,000', house:'Two Bedroom Apartments'},
        {image:image104,apartment:'Sigmabase Apartments VI', address:'7/9 Molade Okoya street Off Ajose Adeogun VI', price:'119,000', house:'Three Bedroom Apartments'},
        {image:image105,apartment:'Novara Apartments Lekki', address:'14/15 Ilasan New Road, Elegushi Lekki, Lagos', price:'63,000', house:'Two Bedroom Apartments'},
    ]

    const ImagesPack=()=>{
        return (
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] '}>

                {images.map((data,index)=>(
                    <div key={index} className={'flex flex-col my-[10px]'}>
                        <div className="flex flex-col relative">
                            <div className="relative h-[300px] w-[100vw] sm:w-[350px] overflow-hidden">
                                <Image src={data.image} alt={''} className={'object-center object-cover w-full h-full scale-105 rounded-md'}/>
                                <div className={"absolute bottom-0 left-0 w-full flex gap-[3px] pl-[10px]"}>
                                    <p className="text-white text-[17px] font-bold">₦ {data.price}</p>
                                    <p className="text-[14px] text-white">/night</p>
                                </div>
                            </div>
                        </div>
                        <div className={'bg-[#ffffff] pl-[20px] pb-[10px]'}>
                            <div className={'flex gap-[10px] py-[10px]'}>
                                <p  style={{fontFamily:'DM sans', fontWeight:900, color:'#484848'}}>{data.apartment}</p>
                            </div>
                            <div className={'flex justify-between '}>
                                <div className={'flex flex-col gap-[5px]'}>
                                    <div className={'flex gap-[10px]'}>
                                        <Image src={location} alt={''} className={'w-[12px] h-[12px]'}/>
                                        <p className={'text-[12px]'}
                                           style={{fontFamily: 'Roboto Slab'}}>{data.address}</p>
                                    </div>
                                    <div className={'flex gap-[10px]'}>
                                        <Image src={home} alt={''} className={'w-[12px] h-[12px]'}/>
                                        <p className={'text-[12px]'} style={{fontFamily: 'Roboto Slab'}}>{data.house}</p>
                                    </div>
                                </div>
                                <div className={`${styles.image} bg-[#F7CDCC] border-0 mr-[10px]`}>
                                    <Image src={love} alt={''}/>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className={styles.shortletContainer}>
            <div
                className={styles.header}
            >
                <p className={styles.shortlet}>Shortlets in Lekki and VI Lagos</p>
                <div className={styles.inputs}>
                    <div>
                        <p>Where</p>
                        <input type="text" placeholder={'Search destinations'}/>
                    </div>
                    <div>
                        <p>Check in</p>
                        <input type="date" placeholder={'Add dates'}/>
                    </div>
                    <div>
                        <p>Check out</p>
                        <input type="date" placeholder={'Add dates'}/>
                    </div>
                    <div>
                        <p>Who</p>
                        <input type="text" placeholder={'Add guests'}/>
                    </div>
                    <div className={'flex justify-center items-center  h-[30px] w-[30px] rounded-lg bg-[#FE6A00]'}>
                        <Image src={search} alt={''} className={'object-cover contain-contain w-[15px] h-[15px]'}/>
                    </div>
                </div>
            </div>

            <div className={'flex flex-col md:flex-row'}>
                <p className={'flex text-[#FE6A00] text-xs font-bold'}>
                    Deep discounts on long stays:
                </p>
                <div className={'flex gap-[3px]'}>
                    {days.map((day,index)=>(
                        <div key={index}>
                            <div className={'flex gap-[5px]'}>
                                <p className={'text-xs'} style={{fontFamily:'Roboto'}}>{day.day}days</p>
                                <p className={'text-xs font-bold'}  style={{fontFamily:'Roboto'}}>-{day.percent}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ImagesPack/>
        </div>
    )
}