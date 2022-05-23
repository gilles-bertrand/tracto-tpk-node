import type { DocumentType } from '@typegoose/typegoose';
import TypegoosePkg from '@typegoose/typegoose';
const { getModelForClass, prop } = TypegoosePkg;
class TractoClass {
    @prop()
  public name?: string;

    @prop()
    public image?: string;

    @prop()
    public price?: number;

    @prop()
    public stock!: number;

    @prop()
    public rating?: number;

    public async setStock (this: DocumentType<TractoClass>, qt: number) {
      this.stock -= qt;
      await this.save();
    }
}

const TractoModel = getModelForClass(TractoClass);

export { TractoModel, TractoClass };
