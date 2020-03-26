import React from "react";
import {useForm} from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Select,
  Box,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper, SimpleGrid
} from "@chakra-ui/core";
import Button from "../Button";
import useCart from "../../hooks/useCart";

const PhotoForm= ({ photo }) => {
  const { register, handleSubmit } = useForm();
  const {addToCart} = useCart();

  const onSubmit = data => {
    addToCart({id: photo.url, url:photo.url, format:data.format, amount: +data.amount});
  };

  return <form onSubmit={handleSubmit(onSubmit)}>
    <SimpleGrid columns={3} spacing={4} mt={4} >
      <FormControl>
        <FormLabel htmlFor="format">Photo format</FormLabel>
        <Select id="format" name="format" ref={register} defaultValue="tenfifteen">
          <option value="tenfifteen">10cm x 15cm</option>
          <option value="elevenseventeen">11cm x 17cm</option>
          <option value="thirteennighteen">13cm x 19cm</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="format">Amount</FormLabel>
        <NumberInput defaultValue={1} min={1} max={20}>
          <NumberInputField id="amount" name="amount" ref={register} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>

      <Box alignSelf="flex-end">
        <Button leftIcon="cart" type="submit">
          Add to cart
        </Button>
      </Box>
    </SimpleGrid>
  </form>
}

export default PhotoForm;
