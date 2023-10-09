"use client";

import React from 'react';
import dynamic from "next/dynamic";
import {useFeaturedProductsQuery} from "@lib/hooks/use-layout-data"

const UnderlineLink = dynamic(() => import("@modules/common/components/underline-link"));
const ProductPreview = dynamic(() => import("@modules/products/components/product-preview"));
const SkeletonProductPreview = dynamic(() => import("@modules/skeletons/components/skeleton-product-preview"));

const FeaturedProducts = () => {
    const {data} = useFeaturedProductsQuery()
    return (
        <div className="py-12">
            <div className="content-container py-12">
                <div className="flex flex-col items-center text-center mb-16">
          <span className="text-base-regular text-gray-600 mb-6">
            Latest products
          </span>
                    <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
                        Our newest styles are here to help you look your best.
                    </p>
                    <UnderlineLink href="/store">Explore products</UnderlineLink>
                </div>
                <div className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
                    {data ? data.map((item) => (
                        <div key={item.id} className="">
                            <ProductPreview  {...item} key={item.id}/>
                        </div>
                    )) : (
                        Array.from(Array(4).keys()).map((i) => (
                            <React.Fragment key={i}>
                                <SkeletonProductPreview/>
                            </React.Fragment>
                        ))
                    )}

                </div>


            </div>
        </div>
    )
}

export default FeaturedProducts


