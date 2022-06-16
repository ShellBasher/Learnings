<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
  public function cartlist(){
    $cartItems = \Cart::getContent();
    dd($cartItems);
    return view('cart', compact('cartItems'));
  }

  public function addToCart(Request $request)
    {
        \Cart::add([
            'id' => $request->Product_ID,
            'name' => $request->name,
            'price' => $request->price,
            'attributes' => array(
                'image' => $request->image,
            )
        ]);
         return redirect()->route('cart.list');

    }

    public function removeCart(Request $request)
    {
        \Cart::remove($request->id);

        return redirect()->route('cart.list');
    }

    public function clearAllCart()
    {
        \Cart::clear();

        session()->flash('success', 'Vos articles ont bien été supprimés !');

        return redirect()->route('cart.list');
    }
}
