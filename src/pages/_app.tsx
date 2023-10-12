import { Aside } from "@/components";
import MainLayout from "@/layouts/mainLayout";
import { wrapper } from "@/redux/store";
import "@/styles/index.sass";
import PageWrapper from "@/utils/PageWrapper";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

function App({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);

	return (
		<Provider store={store}>
			<PageWrapper>
				<Aside />
				<MainLayout>
					<Component {...props.pageProps} />
				</MainLayout>
			</PageWrapper>
		</Provider>
	);
}

export default App;
