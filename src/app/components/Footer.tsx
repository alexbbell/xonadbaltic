'use client'
import { Whatsapp } from './constants'

// const pages = ['Products', 'Pricing', 'Blog'];
export const Footer = (): JSX.Element => {



    return (
        <div className="footer">
            <div>
                Xonad Est
            </div>
            <div>
                <label style={{ color: '#45703E' }}>WhatsApp: </label>
                <a className="top-nav-item" href="https://wa.me/37368981123">
                <Whatsapp />+373 689 81 123</a>
            </div>
        </div>

    )
}