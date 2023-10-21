// import Stripe from "stripe";
import { NextResponse } from "next/server";
import { useCart } from "../../context/cart";
import { stripe } from "../../libs/stripe";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req, { params }) {
  const cart = useCart();
  const { productIds } = await req.json();

  if (!productIds || productIds.length === 0) {
    return new NextResponse("Product ids are required", { status: 400 });
  }

  const products = await supabas.from("Products").select().in("id", productIds);

  const line_items = [];

  products.forEach((product) => {
    line_items.push({
      quantity: 1,
      price_data: {
        currency: "USD",
        product_data: {
          name: product.title,
        },
        unit_amount: product.price.toNumber() * 100,
      },
    });
  });

  // const order = await prismadb.order.create({
  //   data: {
  //     storeId: params.storeId,
  //     isPaid: false,
  //     orderItems: {
  //       create: productIds.map((productId) => ({
  //         product: {
  //           connect: {
  //             id: productId,
  //           },
  //         },
  //       })),
  //     },
  //   },
  // });

  const order = await supabase.from("Orders").upsert([
    {
      stripe_id: "result.paymentIntent.id",
      name: " addressDetails.name",
      address: "addressDetails.address",
      zipcode: "addressDetails.zipcode",
      city: "addressDetails.city",
      country: "addressDetails.country",
      products: cart.getCart(),
      total: cart.cartTotal(),
    },
  ]);

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    phone_number_collection: {
      enabled: true,
    },
    success_url: `${NEXT_PUBLIC_API_BASE_URL}/checkout?success=1`,
    cancel_url: `${NEXT_PUBLIC_API_BASE_URL}/checkout?canceled=1`,
    metadata: {
      orderId: order.id,
    },
  });

  return NextResponse.json(
    { url: session.url },
    {
      headers: corsHeaders,
    }
  );
}
