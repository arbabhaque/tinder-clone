import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtonsRepeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtonsLeft">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtonsFavourite">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtonsLightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtonsRight">
                <FavoriteIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
