import styles from '@/styles/home.module.css'
import Image from  'next/image'
import logo from '@/public/logo.svg'
import image1 from '@/public/image.png'
import image2 from '@/public/image1.png'

export default function Navbar(){
    return (
        <div className={'flex fixed justify-between items-center px-[10%] bg-white'}>
            <div className={styles.logo}>
                <Image src={logo} alt={''} className={'object-cover object-center flex justify-center items-center'}/>
            </div>
            <div className={styles.navbar}>
                <p className={`${styles.normalHeader} text-blue-400`}>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className={styles.innerNav}>
                <p className={styles.naira}>NGN</p>
                <div className={styles.image}>
                    <Image src={image1} alt={''} className={'object-cover object-center'}/>
                </div>
                <div className={styles.image}>
                    <Image src={image2} alt={''} className={'object-contain object-center'}/>
                </div>
            </div>
        </div>
    )
}