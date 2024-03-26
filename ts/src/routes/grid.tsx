import { useState, useEffect } from 'react';
import { authenticate } from 'api/pocketbase/auth.ts';
import { getFSTree } from 'api/pocketbase/collections.ts';
import AdvancedDataViewComponent from 'components/data-view.tsx'

export default function GridPage() {
    return (
        <AdvancedDataViewComponent/>
    );
}