import React from "react";

const profileContext = React.createContext();
const profileIdProvider = profileContext.Provider;
const profileIdConsumer = profileContext.Consumer;

export {profileIdProvider,profileIdConsumer}