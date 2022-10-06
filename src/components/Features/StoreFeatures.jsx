import React from 'react'
import { Box } from "@chakra-ui/react";
import { features } from '../Footer/constant';
import "./StoreFeatures.css";

const StoreFeatured = () => {
  return (
    <Box>
      <div className="features-center">
        {features.map((feature) =>{
            const {id, icon, title, text} = feature;
            return (
                <article key={id} className="feature">
                    <i>{icon}</i>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </article>
            );
        })}
      </div>
    </Box>
  )
}

export default StoreFeatured;

