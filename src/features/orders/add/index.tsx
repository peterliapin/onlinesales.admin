import { useState } from "react";
import {
  OrderCreateDto,
  OrderDetailsDto,
  OrderItemCreateDto,
  OrderItemDetailsDto,
} from "lib/network/swagger-client";
import { useRequestContext } from "providers/request-provider";
import { OrderForm } from "../form";

export const OrderAdd = () => {
  const { client } = useRequestContext();

  const [order, setOrder] = useState<OrderDetailsDto>({
    contactId: 0,
    currency: "",
    exchangeRate: 0,
    refNo: "",
  });

  const handleSave = async (newOrder: OrderDetailsDto) => {
    const createDto: OrderCreateDto = {
      ...newOrder,
    };
    const { data } = await client.api.ordersCreate(createDto!);
  };

  return <OrderForm order={order} updateOrder={setOrder} handleSave={handleSave} isEdit={false} />;
};
