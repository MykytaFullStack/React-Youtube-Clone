import React, { useState } from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
// Icons
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp'
// Custom elements & components
import { StyledBox } from '../sharedComponents/sharedComponents'
import FocusableIcon from './FocusableIcon'
import CreateVideoMenu from './CreateVideoMenu'
import AppsMenu from './AppsMenu'
import NotificationsMenu from './NotificationsMenu'

const StyledRightContainer = styled(StyledBox)`
  flex-grow: 0;
  flex-wrap: nowrap;
  justify-content: space-between;

  /* doesn't work if StyledAvatar = styled(Avatar) */
  .MuiAvatar-root {
    width: 32px;
    height: 32px;
    font-size: 0.875rem;
    background-color: #ef6c00;
  }
`

const RightContainer = () => {
  const [anchorVideoButton, setAnchorVideoButton] = useState(null)
  const [anchorAppsButton, setAnchorAppsButton] = useState(null)
  const [anchorNotificationsButton, setAnchorNotificationsButton] =
    useState(null)

  const handleClose = (event) => {
    setAnchorVideoButton(null)
    setAnchorAppsButton(null)
    setAnchorNotificationsButton(null)
  }

  return (
    <StyledRightContainer>
      <FocusableIcon
        tooltipTitle="Create"
        Icon={VideoCallIcon}
        onClick={(event) => setAnchorVideoButton(event.currentTarget)}
      />
      <CreateVideoMenu
        anchorVideoButton={anchorVideoButton}
        handleClose={handleClose}
      />

      <FocusableIcon
        tooltipTitle="YouTube Apps"
        Icon={AppsIcon}
        onClick={(event) => setAnchorAppsButton(event.currentTarget)}
      />
      <AppsMenu anchorEl={anchorAppsButton} handleClose={handleClose} />

      <FocusableIcon
        tooltipTitle="Notifications"
        Icon={NotificationsNoneSharpIcon}
        onClick={(event) => setAnchorNotificationsButton(event.currentTarget)}
      />
      <NotificationsMenu
        anchorEl={anchorNotificationsButton}
        handleClose={handleClose}
      />

      <IconButton>
        <Avatar>C</Avatar>
      </IconButton>
    </StyledRightContainer>
  )
}

export default RightContainer