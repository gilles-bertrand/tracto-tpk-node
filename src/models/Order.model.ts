import type { Ref } from '@typegoose/typegoose';
import Typegoose from '@typegoose/typegoose';
import { TractoClass } from './Tracto.model.js';
const { getModelForClass, prop } = Typegoose;
class OrderClass {
    @prop({ ref: () => TractoClass })
  public tracto: Ref<TractoClass>;

  @prop()
    date!:Date;

    @prop()
  public quantity?:Number;
}

const OrderModel = getModelForClass(OrderClass);
export { OrderClass, OrderModel };
