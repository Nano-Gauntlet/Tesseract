import * as React from 'react';
import {
    FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, WhatsappIcon, WhatsappShareButton, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon
} from 'next-share';
import { Button } from '@mui/material';

export default function ShareBar({resultElement}) {
    return (
        <>
            <FacebookShareButton
                url={resultElement.url}
                quote={'Learning New Everyday'}
                hashtag={'#learntSomethingNewToday<3'}
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <LinkedinShareButton url={resultElement.url}>
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <WhatsappShareButton
                url={resultElement.url}
                title={'Learning New Everyday'}
                separator=":: "
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TwitterShareButton
                url={resultElement.url}
                title={'Learning New Everyday'}
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <EmailShareButton
                url={resultElement.url}
                subject={'Learning New Everyday'}
                body="body"
            >
                <EmailIcon size={32} round />
            </EmailShareButton>
            <Button size="small" onClick={(e) => {
                e.preventDefault();
                window.open(`${resultElement.url}`, '_blank');
            }}>Learn More</Button>
        </>
    )
}