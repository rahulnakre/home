import React from 'react';
import { Flex, Link, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <div>
      <Link href="https://twitter.com/rahul_nakree" title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon={<FontAwesomeIcon icon={faTwitter} />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/rahulnakre" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon={<FontAwesomeIcon icon={faGithub} />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rahul-nakre-661417169/"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon={<FontAwesomeIcon icon={faLinkedinIn} />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:rahulnakre@gmail.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon={<FontAwesomeIcon icon={faEnvelope} />}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </div>
  </Flex>
);

export default Footer;