#include "RawAudioSenderAndSpeaker.h"
#include "helpers/zoom_video_sdk_user_helper_interface.h"

USING_ZOOM_VIDEO_SDK_NAMESPACE;

// NOTE TO JON This code needs to be added to the session context before joining a meeting:
//ZoomVideoSDKSessionContext session_context;
//session_context.sessionName = session_name_;
//session_context.sessionPassword = session_password_;
//session_context.userName = sUserName;
//session_context.token = token_.c_str();
//session_context.videoOption.localVideoOn = is_video_on;
//session_context.audioOption.connect = true;
//session_context.audioOption.mute = is_mute_audio;
//CExampleRawAudioSenderAndSpeaker* rawAudioSenderAndSpeaker = new CExampleRawAudioSenderAndSpeaker();
//session_context.virtualAudioMic = rawAudioSenderAndSpeaker;
//session_context.virtualAudioSpeaker = rawAudioSenderAndSpeaker;

void RawAudioSenderAndSpeaker::SendRawAudio(char* data, unsigned int data_length, int sample_rate)
{
    if (!virtual_audio_sender_)
    {
        return;
    }

    // See zoom_video_sdk_audio_send_rawdata_interface.h for raw audio data information
    virtual_audio_sender_->Send(data, data_length, sample_rate);
}

void RawAudioSenderAndSpeaker::onMicInitialize(IZoomVideoSDKAudioSender* rawdata_sender)
{
    // Once the sender has been recieved from this callback, then Send can be called
    virtual_audio_sender_ = rawdata_sender;
}

void RawAudioSenderAndSpeaker::onMicStartSend()
{
    if (!virtual_audio_sender_)
    {
        return;
    }

    // Virtual Mic began sending raw audio
}

void RawAudioSenderAndSpeaker::onMicStopSend()
{
    if (!virtual_audio_sender_)
    {
        return;
    }

    // Virtual Mic stopped sending raw audio
}

void RawAudioSenderAndSpeaker::onMicUninitialized()
{
    virtual_audio_sender_ = nullptr;
}

void RawAudioSenderAndSpeaker::onVirtualSpeakerMixedAudioReceived(AudioRawData* data_)
{
    // Handle mixed audio raw data here
    data_->GetBuffer();
    data_->GetBufferLen();
    data_->GetChannelNum();
    data_->GetSampleRate();
}

void RawAudioSenderAndSpeaker::onVirtualSpeakerOneWayAudioReceived(AudioRawData* data_, IZoomVideoSDKUser* pUser)
{
    // Handle audio raw data from single user here
    data_->GetBuffer();
    data_->GetBufferLen();
    data_->GetChannelNum();
    data_->GetSampleRate();
    pUser->getUserName();
}

void RawAudioSenderAndSpeaker::onVirtualSpeakerSharedAudioReceived(AudioRawData* data_)
{
    // Handle audio raw data from share here
    data_->GetBuffer();
    data_->GetBufferLen();
    data_->GetChannelNum();
    data_->GetSampleRate();
}