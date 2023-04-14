import React from "react";
import { TouchableOpacity, Image, View } from "react-native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconurl, dimension, handlePress }) => {
  return (
      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image
          source={iconurl}
          resizeMode="cover"
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
