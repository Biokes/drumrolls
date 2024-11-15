'use client'
import Image from 'next/image'
import x from '@/public/x.png'
import styles from '@/styles/auth.module.css'
import {useState} from "react";
import Link from "next/link";

export default function SignUp(){
    const [index, setIndex] = useState<number>(0)
    const Header = ()=>{
        return (
            <div className={`${styles.authHeader}`}>
                <Link href={'/home'} className={'flex w-[10px] h-[14px] hover:cursor-pointer pt-[3px]'}>
                    <Image src={x} alt={''} className={'object-contain object-center'}/>
                </Link>
                <p className={`font-thin text-sm capitalize text-nowrap hover:cursor-pointer ${index==0 ?'text-amber-600': ''} `} onClick={()=>{setIndex(0)}}>sign in</p>
                <p className={`font-thin text-sm capitalize text-nowrap hover:cursor-pointer ${index==1 ?'text-amber-600': ''}`} onClick={()=>{setIndex(1)}}>sign up</p>
            </div>
        )

    }
        const handleSubmit=()=>{
            return true
        }
    const SignUp = ()=>{
        return (
            <div className={styles.form}>
                <form onSubmit={handleSubmit} className={styles.formInner}>
                    <p className={styles.create}>Create an account</p>
                    <input type="text" placeholder={'Username'} className={styles.input}/>
                    <input type="text" placeholder={'Full Name'} className={styles.input}/>
                    <input type="email" placeholder={'Email'} className={styles.input}/>
                    <input type="password" placeholder={'Password'} className={styles.input}/>
                    <button className={styles.register}>Register</button>
                    <article className={styles.privacyPolicy}>
                        <input type="checkbox"/>
                        <p className={'text-xs flex text-nowrap gap-[2px]'}>i confirm that i have read and accepted the <span className={styles.privacyPolicyText}>privacy policy</span></p>
                    </article>
                </form>
            </div>

        )
    }
    const SignIn = ()=>{
        return(
            <div>
                <form onSubmit={handleSubmit} className={styles.formInner}>
                    <p className={styles.create}>Create an account</p>
                    <input type="text" placeholder={'Email or Username'} className={styles.input}/>
                    <input type="password" placeholder={'Password'} className={styles.input}/>
                    <button className={styles.register}>Log in</button>
                    <div className={styles.signInFooter}>
                        <article className={styles.privacyPolicy}>
                            <input type="checkbox"/>
                            <p className={'text-xs flex text-nowrap gap-[2px]'}>Remember me</p>
                        </article>
                        <p className={styles.forgotPassword}>Forgot Password?</p>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <div className={styles.signUpParent}>
            <div className={'md:rounded-md md:p-[20px_40px] md:border-[1px] md:shadow-md'}>
                <Header/>
                {index === 1 ? <SignUp/> : <SignIn/>}
            </div>
        </div>
    )
}