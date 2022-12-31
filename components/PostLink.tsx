import React, { FC } from "react";
import { Flex, Heading, Box, Text, useColorMode, Link, LinkProps } from "@chakra-ui/react";


interface PostLinkProps extends LinkProps {
  title: string,
  excerpt: string;
}

const PostLink:FC<PostLinkProps> = ({ title, excerpt, ...linkProps }) => { 
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Link {...linkProps} >
      <Box 
        mb={8} 
        display="block" 
        width="100%" 
      >
        <Flex
          width="100%"
          align="flex-start"
          justifyContent="space-between"
          flexDirection={['column', 'row']}
        >
          <Heading size="md" as="h3" mb={2} fontWeight="medium">
            {title}
          </Heading>
        </Flex>
        <Text color={secondaryTextColor[colorMode]}>
          {excerpt}
        </Text>
      </Box>
    </Link>
  )
}

export default PostLink;