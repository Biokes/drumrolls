import Image from 'next/image';
import styles from '@/styles/home.module.css'
import soryImage from '@/public/storyImage.png'
export default function StoryBoard(){
    return (
        <div className={'flex flex-col md:flex-row d:justify-center md:items-center bg-white md:w-[100%] gap-[10px] md:px-[10%] w-[100%] py-[50px] md:pl-[10%]'}>
            <div className={'w-full md:w-[400px] md:ml-[12%]'}>
                <p style={{fontFamily:'DM sans'}} className={'font-bold text-2xl px-[10px] md:px-0'}>
                    About Heristays shortlets in Lekki and VI Lagos:
                </p>
                <div className={`${styles.ptags}`}>
                    <p>
                        We specialize in providing top-tier shortlet accommodations in the most sought-after locations of Victoria Island and Lekki.
                        Our selection of over 300 shortlet apartments is second to none, each fully furnished and serviced to meet the highest standards of luxury and convenience.
                    </p>
                    <p>
                        Power outages are a thing of the past with our 24/7 power supply, reliably supported by dual backup generators.
                        Safety is a priority, and our shortlet apartments are situated within secure gated estates, complete with uniformed
                        guards and electronic access control gates, ensuring your peace of mind.
                    </p>
                    <p>
                        Some of our amenities include a fully-equipped Gym, on-site laundry services,
                        and an inviting swimming pool. Our commitment to cleanliness is unwavering, with professional
                        cleaning services provided every three days to maintain the pristine condition of your shortlet apartment.
                    </p>
                    <p>
                        We are dedicated to offering an unmatched shortlet living experience in Lagos. Whether you’re
                        in town for business or pleasure, our apartments provide the perfect blend of luxury, security,
                        and comfort. Book your next stay with us and discover the ideal shortlet apartment in Lagos—where every detail
                        is designed with your utmost satisfaction in mind.
                    </p>
                </div>
            </div>
            <div className={'h-[400px] w-full sm:w-[400px] rounded-[10px] overflow-hidden'}>
                <Image src={soryImage} alt={''} className={'object-center object-cover scale-y-110'}/>
            </div>
        </div>
    )
}