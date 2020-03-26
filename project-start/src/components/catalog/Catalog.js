import React, {useState} from "react";
import {useQuery} from "react-query";
import {
  Spinner,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton, ModalBody, ModalFooter
} from '@chakra-ui/core';
import {Block, Image, ImageWrapper, Section} from "./Atoms";
import {fetchPhotos} from "./api";
import Button from "../Button";
import PhotoForm from "./PhotoForm";

const Catalog = () => {
  const { status, data, error } = useQuery('photos', fetchPhotos);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return <div>{status === 'loading' ? (
    <Spinner />
  ) : status === 'error' ? (
    <div>Error: {error.message}</div>
  ) : (
      <>
        <Section>
          {data.map((img) => {
            return (
              <ImageWrapper style={{width: img.width * 200/img.height, flexGrow: img.width*200/img.height}} key={img.url} onClick={() => {
                setSelectedPhoto(img);
                onOpen();
              }}>
                <Block style={{paddingBottom: `${img.height / img.width * 100}%`}} />
                <Image src={`https://xieranmaya.github.io/images/cats/${img.url}`} alt="" />
              </ImageWrapper>
            )
          })}
        </Section>
        {isOpen &&
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                  <img src={`https://xieranmaya.github.io/images/cats/${selectedPhoto.url}`} width="100%" alt="" />
                  <PhotoForm photo={selectedPhoto}/>
              </ModalBody>

              <ModalFooter>
                <Button variant="ghost" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        }
    </>
  )}</div>
}

export default Catalog;
