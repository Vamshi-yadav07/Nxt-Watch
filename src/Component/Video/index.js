import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonsContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const Video = props => {
  const {clickDisLiked, clickLiked, isDisLiked, isLiked, videoDetails} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        let isSaved
        const {isDarkTheme, savedVideos, addVideo} = value
        const {
          description,
          id,
          name,
          profileImageUrl,
          publishedAt,
          subscriberCount,
          title,
          videoUrl,
          viewCount,
        } = videoDetails
        const index = savedVideos.findIndex(eachVideo => eachVideo.id === id)
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        console.log(isSaved)
        return (
          <VideoPlayer>
            <ReactPlayer controls url={videoUrl} width="100%" height="400px" />
            <PlayVideoTitle isDarkTheme={isDarkTheme}>{title}</PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus isDarkTheme={isDarkTheme}>
                {viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>
                {publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonsContainer>
                <BtnContainer>
                  <SocialButton
                    isDarkTheme={isDarkTheme}
                    onClick={() => clickLiked()}
                    type="button"
                  >
                    <AiOutlineLike
                      size={25}
                      color={isLiked ? '#2563eb' : '#aaa'}
                    />
                    <ButtonText colour={isLiked}>Like</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    isDarkTheme={isDarkTheme}
                    onClick={() => clickDisLiked()}
                    type="button"
                  >
                    <AiOutlineDislike
                      size={25}
                      color={isDisLiked ? '#2563eb' : '#aaa'}
                    />
                    <ButtonText colour={isDisLiked}>Dislike</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    onClick={() => addVideo(videoDetails)}
                    isDarkTheme={isDarkTheme}
                    type="button"
                  >
                    <BiListPlus
                      size={25}
                      color={isSaved ? '#2563eb' : '#aaa'}
                    />
                    <ButtonText colour={isSaved}>
                      {isSaved ? 'Saved' : 'Save'}
                    </ButtonText>
                  </SocialButton>
                </BtnContainer>
              </PlaySocialButtonsContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage src={profileImageUrl} alt="channel logo" />
              <ChannelInfo>
                <ChannelName isDarkTheme={isDarkTheme}>{name}</ChannelName>
                <ChannelSubscribers isDarkTheme={isDarkTheme}>
                  {subscriberCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription isDarkTheme={isDarkTheme}>
                  {description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default Video
