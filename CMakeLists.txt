# cmake_minimum_required(VERSION <specify CMake version here>)
project(ZoomAssistant)

set(CMAKE_CXX_STANDARD 14)

include_directories(cpp)

add_executable(ZoomAssistant
        cpp/RawAudioSenderAndSpeaker.cpp
        cpp/RawAudioSenderAndSpeaker.h)
